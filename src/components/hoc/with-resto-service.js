import React from 'react';
import RestoServiceContext from '../resto-service-context';

//функция высшего порядка
//в которую передается оборачиваемый компонент
//в этот обор компонент можно передать его пропсы
const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    //из контекста получаем сервис, который создали
                    //применяем контекст на комп кот сюда пришёл
                    //добавл новое-свв, в кот передаем то, что пришл из провайдера
                    (RestoService) => {
                        return <Wrapped {...props} RestoService={RestoService}/>
                    }
                }

            </RestoServiceContext.Consumer>
        )
    }
}

export default WithRestoService;