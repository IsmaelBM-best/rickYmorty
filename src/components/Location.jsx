import React from 'react';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <section>
      <div className="location_container">
        <h2>{name}</h2>
        <ul>
          <li>
            <span>
              <strong>type: </strong>
            </span>
            {type}
          </li>
          <li>
            <span>
              <strong>Dimesion: </strong>
            </span>
            {dimension}
          </li>
          <li>
            <span>
              <strong>Population: </strong>
            </span>
            {residents.length}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Location;
