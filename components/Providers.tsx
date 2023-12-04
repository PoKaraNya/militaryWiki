'use client'
import {Provider} from "react-redux";
import {ConfigProvider, theme} from "antd";
import {store} from "@/store/store";
import {PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {}

export default function Providers({children}: IProps) {
    return (
        <Provider store={store}>
            <ConfigProvider
                theme={{
                    algorithm: theme.darkAlgorithm,
                    token: {
                        colorPrimary: '#007a4c',
                        colorBgContainer: '#f6ffed',
                    },
                }}
            >
                {children}
            </ConfigProvider>
        </Provider>
    )
}