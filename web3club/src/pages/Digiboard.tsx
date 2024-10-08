import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Import your Firebase config

// Define the types for the event data
interface EventData {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
  link: string;
  color: string;
}

const Digiboard: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'digiboard'));
        const eventData: EventData[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as EventData[];
        setEvents(eventData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, []);

  const handleCardClick = (link: string) => {
    window.open(link, '_blank'); // Open link in a new tab
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  if (loading) {
    return <LoadingMessage>Loading Events...</LoadingMessage>;
  }

  return (
    <Container>
      <BackButton onClick={handleBackButtonClick}>Back</BackButton>
      <Header>
        <Title>Welcome to Wallstreet DAO's Digiboard</Title>
        <Subtitle>Check out future events, what's upcoming, and RSVP for the coolest stuff!</Subtitle>
      </Header>
      <CardGrid>
        {events.map(event => (
          <ClickableCard key={event.id} onClick={() => handleCardClick(event.link)}>
            <Card imageUrl={event.imageUrl}>
              <Overlay color={event.color} />
              <CardContent>
                <CardTitle>{event.title}</CardTitle>
                <CardDate>{event.date}</CardDate>
              </CardContent>
            </Card>
          </ClickableCard>
        ))}
      </CardGrid>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #111;
  padding: 20px;
`;

const BackButton = styled.button`
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  &:active {
    transform: scale(0.92);
  }
  &:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgb(112, 255, 3) 60%);
    color: rgb(4, 4, 38);
  }
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 0 0 10px 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 0;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
`;

const ClickableCard = styled.div`
  cursor: pointer;
`;

const Card = styled.div<{ imageUrl: string }>`
  position: relative;
  overflow: hidden;
  padding-top: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div<{ color: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => {
    switch(props.color) {
      case 'green':
        return 'linear-gradient(to top, rgba(0, 255, 0, 0.8), transparent)';
      case 'red':
        return 'linear-gradient(to top, rgba(255, 0, 0, 0.8), transparent)';
      case 'purple':
        return 'linear-gradient(to top, rgba(128, 0, 128, 0.8), transparent)';
      default:
        return 'linear-gradient(to top, rgba(0, 255, 255, 0.8), transparent)';
    }
  }};
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  padding: 10px;
  color: #fff;
`;

const CardTitle = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
`;

const CardDate = styled.p`
  font-size: 0.8em;
  margin: 5px 0;
`;

const LoadingMessage = styled.p`
  color: white;
  font-size: 1.5rem;
`;

export default Digiboard;
