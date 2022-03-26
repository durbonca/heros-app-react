import { PrivateRoutes } from '../../components/routers/PrivateRoutes';
import { AuthContext } from '../../auth/authContext';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>Saliendo de la ruta</span>
}))

describe('pruebas en private route', () => {

    Storage.prototype.setItem = jest.fn();

    
    test('debe de mostrar el componente si esta autenticado y guardar en local storage', () => {
        const contextUser = {
            user: {
                name: 'Jhon',
                logged: true
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextUser }>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoutes>
                        <div>Private Route</div>
                    </PrivateRoutes> 
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper.find('div').text()).toBe('Private Route');
        expect(Storage.prototype.setItem).toHaveBeenCalledWith("lastPath", "/");
    })

    test('debe de redireccionar al login si no esta autenticado', () => {
        const contextUser = {
            user: {
                logged: false
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextUser }>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoutes>
                        <div>Private Route</div>
                    </PrivateRoutes> 
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper.find('span').text()).toBe('Saliendo de la ruta');
    })


})