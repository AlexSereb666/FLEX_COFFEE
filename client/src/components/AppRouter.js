import * as React from "react";
import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
    return (
        <Routes>
            {!!localStorage.getItem('token') && authRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.Component />} />
            ))}
            {publicRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.Component />} />
            ))}
        </Routes>
    );
})

export default AppRouter;
