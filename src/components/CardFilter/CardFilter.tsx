import React, { useState } from 'react';
import Card, { CardType } from '../Card/Card';
import jsonData from '../../../public/comments.json';

const CardFilter = ({ onCardClick }: { onCardClick: any }) => {
   const [selectedFilter, setSelectedFilter] = useState('All');

   const handleCardClick = (cardData: CardType) => {
      onCardClick(cardData);
   };

   const handleFilterChange = (filter: React.SetStateAction<string>) => {
      setSelectedFilter(filter);
   };

   const generateCardsFromJson = (
      json: any
   ): { cards: CardType[]; categories: string[] } => {
      const cards: CardType[] = [];
      const categories: string[] = ['All'];

      for (const key in json) {
         if (Array.isArray(json[key])) {
            const cardDataArray: string[] = json[key];

            cardDataArray.forEach((cardData: string) => {
               const id = cards.length + 1;
               const category = key;
               const content = cardData;

               const card: CardType = {
                  id,
                  category,
                  content,
               };

               cards.push(card);
               if (!categories.includes(category)) {
                  categories.push(category);
               }
            });
         }
      }

      return { cards, categories };
   };

   const { cards, categories } = generateCardsFromJson(jsonData);

   const filteredCards =
      selectedFilter === 'All'
         ? cards
         : cards.filter((card) => card.category === selectedFilter);

   return (
      <div>
         <div className='grid grid-cols-5 gap-4 mt-4'>
            {categories.map((category: string) => (
               <button
                  className={`${
                     selectedFilter === category
                        ? 'bg-blue-500'
                        : 'bg-slate-500'
                  } text-white px-4 py-2 rounded`}
                  key={category}
                  onClick={() => handleFilterChange(category)}
               >
                  {category}
               </button>
            ))}
         </div>

         <div className='grid grid-cols-3 gap-4 mt-4'>
            {filteredCards.map((card: CardType) => (
               <Card
                  onCardClick={handleCardClick}
                  key={card.id}
                  cardData={card}
               />
            ))}
         </div>
      </div>
   );
};

export default CardFilter;
