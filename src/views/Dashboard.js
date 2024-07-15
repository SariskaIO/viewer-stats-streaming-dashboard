
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './index.css'

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
import { getViewerStreamId } from "store/actions/viewer";

function Dashboard() {
  const navigate = useNavigate();
  const streams = useSelector(state => state.stream);
  const dispatch = useDispatch();

  const handleStream = (streamId) => {
    if(!streamId) return;
    localStorage.setItem('viewer-stream-id', streamId);
    dispatch(getViewerStreamId(streamId));
    navigate(`/admin/stream/${streamId}`)
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">List View of Streams</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Sr. No.</th>
                      <th>Stream Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(streams)?.length ? Object.keys(streams).map((stream, index) => {
                      let streamId = stream.split('/')[1];
                      return (
                        <tr key={streamId} onClick={() => handleStream(streamId)} className="stream-table-row">
                          <td>{index+1}</td>
                          <td>{streamId}</td>
                        </tr>
                      )
                    }
                    ) : 
                    <tr >
                          <td>No Stream found</td>
                    </tr>
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default Dashboard;

const data = [
   "192.168.8.91/0c65883dfbf34647aea45689f1fb4966",
  "3v3ehpvzvx0ouwxb/58b6299e70254d9ca035d751b1b7b733",
  "96o1em8lmpgu2r2m/61fc98658b314ef0b022b014191d8399",
  "192.168.58.43/14ddd4d130894804a8bbb044a2081ced",
  "192.168.17.229/6777e581df8947c4b3ba2f7837dccf83",
  "192.168.32.84/2d5304d6b67c4832a810ac986666962e",
  "4m61p0l43fz50zhi/90b54ba08db84729beb05bbeb74f3e33",
  "192.168.34.187/ba38a8b0de54478bbed154ce42d8f45e",
  "192.168.63.2/ce753f6995d945acbf5535a21604c9e0",
 "192.168.25.121/6b37eb03cfb54c168e88f81a38f20314",
 "192.168.33.77/67ec4bb582c642018700f260d5e3ce37",
 "192.168.56.174/d17c62fab9684c70bfac34184c7e3af6",
 "mp94rl8jiytxbojj/4f3de61ebc1941be8e88c80010d059a4",
 "192.168.58.5/54701f4410d44b109e6b8280cb9024b7",
 "192.168.13.160/cf29f1d098f54e33bd71a62a24cc9682",
 "6v27b0p3xjk1sgf3/4d51cadd0f2848b1ba351d6b315a80c1",
 "7p0s1bsmkzvqj6nm/0df6c8bf3b2f4969bd14a0e013ebb97b",
 "192.168.14.97/5c857a16915b47afa8476858ee32d485",
 "pkuq4b24nj58fg85/02b4fadb99fd42cb9e3f5d77d9b812e1",
 "ev5how4vxvdhmkdo/e0ca3eb6ba1744a0b9b0e0097aade90d",
 "192.168.61.67/16571f0be56e4d8a85a74c9c10436a74",
 "192.168.21.112/28eb4970093d460c92af66fec99caa3c",
 "192.168.34.187/1a7f9c81b05e417a9e19f60fed423340",
 "192.168.44.129/3054483e537a470187fac2250bc824f3",
 "192.168.21.112/a68565da8a2f4d16b9f742ec7e13f898",
 "192.168.36.209/9d510f09c3784c85a18c579ac8a3c4a9",
 "6rp1z6eavcigy0vm/11c0cc66f2514626aafeabd5b308fde1",
 "192.168.28.16/80f7ebebc04b448981b9c8a43d2bc175",
 "lvfikrag42ne3k8x/36dac167c02545d18b056d55801a0908",
 "p9hknymkjruisrkc/1236b5bb05734f2eb4337c23b365b5b9",
 "pqkynu513deqrdha/2bfaf587c91f42a488c54bb00f6eff2e",
 "sm0gch0tmbjv4rrt/49c440b9cd664d4592d3cd0901da7281",
 "192.168.56.174/a91a30a5be954eac8651ea53ca1175a9",
 "80lmmhuk3rogzt76/788c637d2f2e434dae5e12482fdf4606",
 "192.168.62.146/cf5d2063e64a4b97b6f7f1142fe4136a",
 "192.168.29.240/6f2924f82f36461397df485f892a27ca",
 "jmo5h3a56kqlvx16/9c34c8573ab24759a43e470be2e9a05d"
]