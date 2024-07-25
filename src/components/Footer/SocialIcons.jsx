'use client';
import { IonIcon } from '@ionic/react';
import React from 'react';

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <IonIcon icon={icon.name}></IonIcon>
          {/* <ion-icon name={icon.name}></ion-icon> */}
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
