import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ResidentInfo.css';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);
  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident);

      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadResidentInfo();
  }, []);
  return (
    <>
      {residentInfo && (
        <article>
          <div className="elements_container">
            <div className="container_img">
              <img src={residentInfo.image} alt={residentInfo.name} />
            </div>
            <div className="info_container">
              <ul>
                <li className="name">
                  <strong>{residentInfo.name}</strong>
                </li>
                <li>
                  <span>
                    <strong>Species: </strong>
                  </span>
                  {residentInfo.species}
                </li>
                <li>
                  <span>
                    <strong>Status: </strong>
                  </span>
                  {residentInfo.status}
                </li>
                <li>
                  <span>
                    <strong>Origin: </strong>
                  </span>
                  {residentInfo.origin.name}
                </li>
                <li>
                  <span>
                    <strong>Episode appearances: </strong>
                  </span>
                  {residentInfo.episode.length}
                </li>
              </ul>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default ResidentInfo;
