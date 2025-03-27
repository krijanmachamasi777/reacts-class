import '@mantine/core/styles.css';
import { Button, TextInput, Container } from '@mantine/core';
import { BackgroundImage, Center, Text } from '@mantine/core';

const MantineComponent = () => {
    return (
        <>
        
            <Container 
                
                size="sm" 
                style={{ border: '1px solid black', height: '400px', margin: '100px', borderRadius: '15px', padding: 0 }}
            >
                <BackgroundImage
                    src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
                    radius="lg"
                    style={{ height: '100%', position: 'relative', background:'cover'  }}
                    
                >
                    <Center p="md" style={{ position: 'absolute', bottom: 20, left: 20 }}>
                        <Text c="white" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                            This is a BackgroundImage
                        </Text>
                    </Center>
                </BackgroundImage>
                
                <Center p="md" style={{ position: 'absolute', bottom: 0, left: 20 }}>
                    <TextInput 
                        placeholder="Your text here..." 
                        style={{ width: '100%', marginBottom: '10px' }} 
                    />
                    <Button fullWidth variant="filled">Submit</Button>
                </Center>
            </Container>
        </>
    );
};

export default MantineComponent;
