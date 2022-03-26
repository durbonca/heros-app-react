import { SearchScreen } from "../../../components/search/SearchScreen";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Search Screen Test', () => {

    test('snapshot', () => {
        const wrapper = mount(
                <MemoryRouter initialEntries={['/search']}>
                    <SearchScreen />
                </MemoryRouter>
            );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Búsquedas');
        expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un héroe');
    });

    test('debe de mostar a batman y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input').prop('value')).toBe('batman');
        //expect(wrapper.find('h2').text().trim()).toBe('Resultados de la búsqueda: batman');
    })

    test('no debe mostrar resultados de busqueda', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=123']}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input').prop('value')).toBe('123');
        expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay resultados');
    })

    test('debe de llamar a navigate() a la nueva pantalla', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
        );
        
        wrapper.find('input').simulate('change', { target: { name: 'searchText', value: 'batman' } });
        expect(wrapper.find('input').prop('value')).toBe('batman');

        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect( mockNavigate ).toHaveBeenCalledWith('?q=batman');
    });
})