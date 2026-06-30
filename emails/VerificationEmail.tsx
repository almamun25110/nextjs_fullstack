import { Body, Button, Container, Head, Heading, Html, Img, Preview, Section, Tailwind, Text } from 'react-email';

interface VerificationEmailProps {
  username?: string;
  otp?: string;
}

export default function VerificationEmail({username, otp}: VerificationEmailProps){
  const previewText = `Welcome to ${otp}, ${username}!`;
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-black m-auto font-sans">
          <Container className="mb-10 mx-auto p-5 max-w-116.25">
            <Section className="mt-10">
              <Img
                src={`https://example.com/brand/example-logo.png`}
                width="60"
                height="60"
                alt="Logo Example"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-2xl text-white font-normal text-center p-0 my-8 mx-0">
              Welcome to <strong>{otp}</strong>, {username}!
            </Heading>
            <Text className="text-start text-sm text-white">
              Hello {username},
            </Text>
            <Text className="text-start text-sm text-white leading-relaxed">
              We're excited to have you onboard at <strong>{otp}</strong>.
              We hope you enjoy your journey with us. If you have any questions
              or need assistance, feel free to reach out.
            </Text>
            <Section className="text-center mt-8 mb-8">
              <Button
                className="py-2.5 px-5 bg-white rounded-md text-black text-sm font-semibold no-underline text-center"
                href={`http://localhost:3000/verify/${username}`}
              >
                Get Started
              </Button>
            </Section>
            <Text className="text-start text-sm text-white">
              Cheers,
              <br />
              The {otp} Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
