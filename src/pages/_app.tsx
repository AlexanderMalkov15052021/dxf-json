import "@/styles/globals.css";
import { ConfigProvider } from "antd/lib";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#8A2BE2',
          colorBgContainer: '#fff6ed',
        },
        // components: {
        //   Button: {
        //      colorPrimaryBorderHover: 'red',
        //      colorPrimaryHover: 'lightgray',
        //      colorPrimary: 'red',
        //      colorPrimaryActive: 'lightgray',
        //      colorPrimaryTextHover: 'lightgray',
        //   }
        // }
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
