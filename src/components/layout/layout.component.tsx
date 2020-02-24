import React, {
  ReactNode,
  ReactElement,
  useState,
  useRef,
  RefObject,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { Light, Dark } from 'lib/style';

import HeaderComponent from '../header';
import { GlobalStyle } from './layout.style';

interface LayoutProps {
  location: Location;
  title: string;
  children?: ReactNode;
}

export default function Layout({
  location,
  title,
  children,
}: LayoutProps): ReactElement {
  const [checked, setChecked] = useState<boolean>(false);
  const scrollRef: RefObject<HTMLDivElement> = useRef(null);

  const rootPath: string = `/`;
  let header: ReactNode;

  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...styledScale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to='/'
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   );
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to='/'
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   );
  // }
  return (
    <ThemeProvider theme={checked ? Dark : Light}>
      <GlobalStyle />
      <HeaderComponent
        title={title}
        checked={checked}
        setChecked={setChecked}
      />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </footer>
    </ThemeProvider>
  );
}
