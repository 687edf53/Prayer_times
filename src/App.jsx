import MainContent from "./components/MainContent";
import Container from '@mui/material/Container'
import './App.css'
export default function App() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100vw'}}>
        <Container maxWidth="xl">
          <MainContent />
        </Container>
      </div>
    </>
  )
}