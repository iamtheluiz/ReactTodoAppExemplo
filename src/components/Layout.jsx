import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
`
const SideBar = styled.div`

`

function Layout () {
  return (
    <Container>
      <SideBar>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <strong>Home</strong>
              </Link>
            </li>
            <li>
              <Link to="/list">
                <strong>Lista</strong>
              </Link>
            </li>
            <li>
              <Link to="/todo">
                <strong>Tarefas</strong>
              </Link>
            </li>
          </ul>
        </nav>
      </SideBar>
      <Outlet />
    </Container>
  );
}

export default Layout ;