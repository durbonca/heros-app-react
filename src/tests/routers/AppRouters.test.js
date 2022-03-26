import { mount } from 'enzyme';
import { AppRouter } from '../../components/routers/AppRouter';
import { AuthContext } from '../../auth/authContext';

describe('<AppRouters />',()=>{
    
    const contextValue = {
        user: {
            logged: false,
        }
    }
    
    test('debe de mostrar login si no esta autenticado', ()=>{
        const wrapper = mount( 
            <AuthContext.Provider value={contextValue} >
                <AppRouter />
            </AuthContext.Provider>
            )
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login');
    })

    test('debe de mostrar componente marvel si esta autenticado', ()=>{
        const contextValue = {
            user: {
                logged: true,
                name: 'pepe'
            }
        }

        const wrapper = mount( 
            <AuthContext.Provider value={contextValue} >
                <AppRouter />
            </AuthContext.Provider>
            )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);

    })

})