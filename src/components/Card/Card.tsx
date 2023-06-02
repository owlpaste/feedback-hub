import React from 'react';

export type CardType = {
   id: number;
   category: string;
   content: string;
};

const Card = ({
   cardData,
   onCardClick,
}: {
   cardData: CardType;
   onCardClick: any;
}) => {
   const handleClick = () => {
      onCardClick(cardData.content);
   };

   return (
      <div
         onClick={handleClick}
         className='bg-white text-black p-4 shadow rounded-lg flex flex-col hover:bg-red-700 hover:text-white transition duration-1000 ease-in-out cursor-pointer'
      >
         <p>{cardData.content}</p>
      </div>
   );
};

export default Card;
