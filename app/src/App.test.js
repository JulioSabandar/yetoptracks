import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Should Display Home Page', ()=> {
  const {getByText} = render(<App/>);
  const title = getByText(/Music playlists made easy./i);
  expect(title).toBeInTheDocument();
})

test('Should Render Navbar', ()=>{
  const{getByTestId} = render(<App/>);
  const navbar = getByTestId("nav-bar");
  expect(navbar).toBeInTheDocument();
})

test('Should Render Search Page components', ()=> {
  const{getByTestId} = render(<App/>);
  const linkToSearchPage = getByTestId('search-page-btn');
  fireEvent.click(linkToSearchPage);
  const searchbar = getByTestId('search-bar');
  const searchbarinput = getByTestId('search-bar-input');
  const searchbarbutton = getByTestId('search-bar-button');
  const navbar = getByTestId("nav-bar");
  expect(searchbar).toBeInTheDocument();
  expect(searchbarinput).toBeInTheDocument();
  expect(searchbarbutton).toBeInTheDocument();
  expect(navbar).toBeInTheDocument();
})

test('Should Render Playlist Page Title and components', ()=> {
  const{getByTestId} = render(<App/>);
  const linkToPlaylistPage = getByTestId('playlist-page-btn');
  fireEvent.click(linkToPlaylistPage);
  const playlistTitle = getByTestId('playlist-title');
  const navbar = getByTestId("nav-bar");
  expect(playlistTitle.textContent).toBe(' Your Playlist ')
  expect(navbar).toBeInTheDocument();
})