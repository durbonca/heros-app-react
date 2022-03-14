import { useParams, Navigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const { id : heroeId } = useParams();

  const hero = getHeroById(heroeId);  
  if(!hero) {
    return <Navigate to='/' />
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

  return (
    <h1>{ superhero }</h1>
  )
}
