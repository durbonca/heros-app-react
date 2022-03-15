import { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroByName'
import { HeroCard } from '../hero/HeroCard'

export const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  
  const [ values, handleInputChange ] = useForm({
    searchText: q,
  })

  const { searchText } = values
  const heroesFiltered = useMemo(() => getHeroByName(q), [q])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(values.searchText.trim().length > 0) {
      navigate(`?q=${searchText}`)
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
            (q === '') ? <p className='alert alert-info'>Buscar un héroe</p> 
            : (heroesFiltered.length === 0) ? <p>No hay resultados</p> 
            : heroesFiltered.map(hero => <HeroCard key={hero.id} {...hero} />)
          }
        </div>

      </div>
    </>
  )
}
