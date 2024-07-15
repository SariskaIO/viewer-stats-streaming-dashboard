
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { flagsPassedInStreaming } from "utils";
import { getViewerCount } from "utils";
import { getFirstStreamId } from "utils";

function StreamView() {
  const { streamId } = useParams();
  const reduxStreamId = useSelector(state => state.viewer)?.streamId;
  const streams = useSelector(state => state.stream);
  const [currentStream, setCurrentStream] = useState(null);
  const [flags, setFlags] = useState({});
  const [currentViewers, setCurrentViewers] = useState(0);

  const [id, setId] = useState( streamId || reduxStreamId || localStorage.getItem('viewer-stream-id'));

  let streamKeys = Object.keys(streams);

  const fetchStreamDetails = async(newId) => {
    if(!streamKeys?.length) return null;
    let streamObj = streamKeys.find(stream => stream.includes(`${id || newId}`));
    let stream = JSON.parse(streams[streamObj]);
    let streamDetails={};
    for (const [key, value] of Object.entries(stream)){
      if(key === 'owner_id' || key === 'app_id' || key === 'uuid' || key === 'room_name') continue;
      streamDetails[key] = value;
    }
    setCurrentStream({...streamDetails});
    setFlags(flagsPassedInStreaming({...streamDetails}));
    let viewerCountObj = await getViewerCount({...streamDetails}, id);
    let valuesOfViewerCountObj = viewerCountObj && Object.values(viewerCountObj);
    if(valuesOfViewerCountObj?.length){
      setCurrentViewers(valuesOfViewerCountObj[0]?.current_viewers);
    }
  }
  
  useEffect(()=>{
    if(!id){
     let newId = getFirstStreamId(streamKeys);
     setId(newId);
     fetchStreamDetails(newId)
    }else{
      fetchStreamDetails();
    }
  },[streamKeys?.length])

  const renderNoStreamIdHTML = () => {
    return (
      <Card className="card-tasks">
        <CardHeader>
          <h6 className="title d-inline">Stream-ID</h6>
        </CardHeader>
        <CardBody>
          <div className="table-full-width table-responsive">
            <p>There is no stream</p>
          </div>
        </CardBody>
      </Card>
    )
  }
  
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            {!(id && currentStream && Object.keys(currentStream)?.length)? 
            <>{renderNoStreamIdHTML()}</>
            :
            <Card className="card-tasks">
              <CardHeader>
                <CardTitle tag="h4">Stream Details</CardTitle>
                <h6 className="title d-inline">Stream-ID</h6>
                <p className="card-category d-inline">{id}</p>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <p className="title">User-ID</p>
                          <p className="text-muted">
                            {currentStream?.user_id}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="title">Number of Viewers</p>
                          <p className="text-muted">
                            {currentViewers}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="title">Flags Passed in the Stream</p>
                          <div className="text-muted">
                          {Object.entries(flags).map(([key, value]) => (
                            <p key={key} className="text-muted">{`${key}: ${value}`}</p>
                          ))}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
            }
          </Col>
        </Row>
      </div>
    </>
  );
}

export default StreamView;
