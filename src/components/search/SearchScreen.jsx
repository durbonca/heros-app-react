import React from 'react'
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroByName'
import { HeroCard } from '../hero/HeroCard'

export const SearchScreen = () => {

  const [ values, handleInputChange, reset ] = useForm({
    searchText: '',
  })

  const { searchText } = values
  const heroesFiltered = getHeroByName(searchText)

  const handleSubmit = (e) => {
    if(values.searchText.trim().length > 0) {
      e.preventDefault()
      reset()
    }
  }

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSubmit} >
            <input 
              type="text"
              name='searchText'
              placeholder='buscar un héroe...'
              className='form-control'
              autoComplete='off'
              value={values.searchText}
              onChange={handleInputChange}
              />
              <button 
                className='btn btn-outline-primary mt-1'
                type='submit'
              >
                Buscar...
              </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Resultados</h4>
          <hr />
          {
            heroesFiltered.map(hero => <HeroCard key={hero.id} {...hero} />)
          }
        </div>

      </div>
    </>
  )
}
