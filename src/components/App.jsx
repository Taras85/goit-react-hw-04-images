import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageGallary from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import {fetchImages} from '../Api/Pixabay';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';


const App =()=>{
  const [query, setQuery]=useState('')
  const [images, setImages]=useState([])
  const [totalImages, setTotalImages]=useState(0)
  const [largeImageURL, setLargeImageURL]=useState('')
  const [page, setPage]=useState(1)
  const [error, setError]=useState(null)
  const [isLoading, setIsLoading]=useState(false)
  const [showModal, setShovModal]=useState(false)

    useEffect(()=>{
      if (query){
       
            const fetchImg = async ()=>{
               try {
                setIsLoading(true)
                  const data = await fetchImages(query, page);
                  setTotalImages(data.totalHits)
                  
                  if (data.totalHits === 0) {
                    setImages([])
                    toast.info(`No found  ${query}. `);
                    return;
                  }
                  
                  setImages(prevImages=> [...prevImages, ...data.hits])
                 
                } catch (error) {
                  setError(error)
                  // this.setState({ error });
                  toast.error('Oops! Something went wrong');
                } finally {
                  setIsLoading(false)
                }
              }
              fetchImg()
            }
            
         
    }, [query, page])


  const handleSearchbarSubmit = query => {
    setQuery(query)
    setImages([])
    setPage(1);
    
  } 

  const onLoadMore = () => {
    if (images.length === totalImages){
      toast.info(`At your request no more photos`)
    }
 setPage(prevPage =>prevPage+1)
  }



  const onOpenModal = e => {
    setLargeImageURL(e.target.dataset.source)

    setShovModal(true)
  };
  const closeModal =( )=>{
    setShovModal(false)
    setLargeImageURL('')
  }



    return (
      <div>
        <Searchbar
          onSubmit={handleSearchbarSubmit}
        />
        {error}

         {images.length > 0 && !error && (
          <ImageGallary images={images} error={error} onOpenModal={onOpenModal} />
        )}

        {isLoading && <Loader/>}
        
        {!isLoading && images.length >= 12 && !error &&
          (<Button onLoadMore={onLoadMore} />)}
        
        {showModal && (
          <Modal onToggleModal={closeModal}
            largeImageURL={largeImageURL} />
        )}

         <ToastContainer autoClose={2500} />
      </div>
    )
  }
// }

export default App;