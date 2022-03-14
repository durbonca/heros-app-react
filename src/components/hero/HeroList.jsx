import { getHeroesByPublisher } from "../../selectors/getHeroByPublisher"

export const HeroList = ( { publisher } ) => {

    const heroes = getHeroesByPublisher(publisher)
    return (
            <ul>
                {heroes.map( hero => { return (
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>)})}
            </ul>
    )
}
