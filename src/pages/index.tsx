import { Inter } from 'next/font/google';
import { useState } from 'react';

import CardFilter from '@/components/CardFilter/CardFilter';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
   const [generatedText, setGeneratedText] = useState('');
   const [studentName, setStudentName] = useState('');
   const [studentPossessivePronoun, setStudentPossessivePronoun] = useState('');
   const [studentPersonalPronoun, setStudentPersonalPronoun] = useState('');
   const [generatedTextRowCount, setGeneratedTextRowCount] = useState(10);

   function handleClick(textContent: string) {
      if (generatedText === '') {
         setGeneratedText(`${textContent}`);
      } else {
         setGeneratedText(`${generatedText} ${textContent}`);
      }
   }

   function handleReplace() {
      let replacedText = generatedText.replaceAll(
         '<Student Name>',
         studentName
      );
      replacedText = replacedText.replaceAll(
         '<possessive>',
         studentPossessivePronoun
      );
      replacedText = replacedText.replaceAll(
         '<personal>',
         studentPersonalPronoun
      );
      setGeneratedText(replacedText);
   }

   function handleClear() {
      setGeneratedText('');
   }

   function handleCopy() {
      let replacedText = generatedText.replaceAll(
         '<Student Name>',
         studentName
      );
      replacedText = replacedText.replaceAll(
         '<possessive>',
         studentPossessivePronoun
      );
      replacedText = replacedText.replaceAll(
         '<personal>',
         studentPersonalPronoun
      );
      navigator.clipboard.writeText(replacedText);
   }

   function handleName(event: React.ChangeEvent<HTMLInputElement>) {
      setStudentName(event.target.value);
   }

   function handlePossessivePronoun(
      event: React.ChangeEvent<HTMLInputElement>
   ) {
      setStudentPossessivePronoun(event.target.value);
   }

   function handlePersonalPronoun(event: React.ChangeEvent<HTMLInputElement>) {
      setStudentPersonalPronoun(event.target.value);
   }

   function handleTextAreaUpdate(
      event: React.ChangeEvent<HTMLTextAreaElement>
   ) {
      setGeneratedText(event.target.value);
   }

   return (
      <>
         <Header />
         <main className='container my-10 mx-auto rounded-lg text-white w-full sm:w-auto'>
            <section className='mb-6'>
               <h1 className='text-center text-5xl md:text-6xl xl:text-7xl text-blue-300 font-inter'>
                  Feedback Hub
               </h1>
            </section>
            <section className='container mx-auto py-4'>
               <ul className='mb-2 mx-auto flex flex-wrap grid-cols-3 justify-around'>
                  <li className='100 p-4'>
                     <input
                        type='text'
                        placeholder='Name'
                        id='name'
                        onChange={handleName}
                        className='border border-gray-400 p-2 rounded-md text-black'
                     />
                  </li>
                  <li className='100 p-4'>
                     <input
                        type='text'
                        placeholder='Possessive pronoun (his/her)'
                        id='possessive'
                        onChange={handlePossessivePronoun}
                        className='border border-gray-400 p-2 rounded-md text-black'
                     />
                  </li>
                  <li className='100 p-4'>
                     <input
                        type='text'
                        placeholder='Personal pronoun (he/she)'
                        id='personal'
                        onChange={handlePersonalPronoun}
                        className='border border-gray-400 p-2 rounded-md text-black'
                     />
                  </li>
               </ul>
            </section>
            <section className='container mx-auto py-4 w-full sm:w-auto'>
               <textarea
                  id='generatedText'
                  className='w-full text-black'
                  value={generatedText}
                  rows={generatedTextRowCount}
                  onChange={handleTextAreaUpdate}
               ></textarea>
            </section>
            <section className='container mx-auto py-4'>
               <ul className='flex justify-evenly'>
                  <li>
                     <input
                        type='button'
                        id='replaceText'
                        value='Replace placeholders'
                        className='rounded cursor-pointer px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal border hover:bg-sky-700 transition duration-500 ease-in-out hover:opacity-70 cursor-pointer'
                        onClick={handleReplace}
                     />
                  </li>
                  <li>
                     <input
                        type='button'
                        id='copyText'
                        value='Copy text'
                        className='rounded cursor-pointer px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal border hover:bg-sky-700 transition duration-500 ease-in-out hover:opacity-70 cursor-pointer'
                        onClick={handleCopy}
                     />
                  </li>
                  <li>
                     <input
                        type='button'
                        id='clearText'
                        value='Clear'
                        className='rounded cursor-pointer px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal border hover:bg-sky-700 transition duration-500 ease-in-out hover:opacity-70 cursor-pointer'
                        onClick={handleClear}
                     />
                  </li>
               </ul>
            </section>
            <section>
               <CardFilter onCardClick={handleClick} />
            </section>
         </main>
      </>
   );
}
