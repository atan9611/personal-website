import React from 'react';
import '../App.css'; // make sure path is correct

const Card = ({ company, roles }) => {
  return (
    <div style={{ marginBottom: '1%' }}>
      <div className="subtitle-slot">
        <p className="subtitle">{company}</p>
      </div>

      {roles.map((role, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            position: 'relative',
            marginBottom: '1rem', // add space between roles
          }}
        >
          {/* Bullet and connecting line */}
          <div
            style={{
              width: 20,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Diamond */}
            <div style={{ zIndex: 1, lineHeight: '1em' }}>◆</div>

            {/* Line below the diamond */}
            {index < roles.length - 1 && (
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem', // slightly below diamond
                  height: '45px', // long enough to reach next diamond
                  width: 1,
                  backgroundColor: 'black',
                }}
              />
            )}
          </div>

          {/* Role content */}
          <div style={{ paddingLeft: '2%', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ fontStyle: 'italic', marginTop: 0, marginBottom: 4 }}>
                {role.title}
              </p>
              {role.date && (
                <p
                  className="date"
                  style={{ marginTop: 0, marginBottom: 4, whiteSpace: 'nowrap' }}
                >
                  {role.date}
                </p>
              )}
            </div>
            <p style={{ marginTop: 0 }}>{role.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};





export default Card;
