"use client";

import {
  Alert,
  Button,
  Card,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

function ContactForm() {
  const searchParams = useSearchParams();
  const initialOpleiding = searchParams.get("opleiding") ?? "";
  const initialPakket = searchParams.get("pakket") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const [opleiding, setOpleiding] = useState(initialOpleiding);
  const defaultBericht =
    initialPakket && initialOpleiding
      ? `Ik wil graag meer informatie over het ${initialPakket}-pakket (${initialOpleiding}).`
      : initialPakket
        ? `Ik wil graag meer informatie over het ${initialPakket}-pakket.`
        : "";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-westeraam-blue sm:text-4xl">Contact</h1>
        <p className="mt-4 text-gray-600">
          Heb je vragen of wil je je inschrijven? Neem contact op of vul het aanmeldformulier in.
          Wij zijn actief in {siteConfig.regions}.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-westeraam-blue">Contactgegevens</h2>
          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Adres</dt>
              <dd className="mt-1 text-gray-800">{siteConfig.address}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Telefoon</dt>
              <dd className="mt-1">
                <a
                  href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
                  className="text-westeraam-blue hover:underline"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-1 text-sm text-gray-500">{siteConfig.openingHours}</p>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">WhatsApp</dt>
              <dd className="mt-1">
                <a
                  href={`https://wa.me/31${siteConfig.whatsapp.replace(/-/g, "").replace(/^0/, "")}`}
                  className="text-westeraam-blue hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.whatsapp}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">E-mail</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-westeraam-blue hover:underline"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">CBR Rijschoolnummer</dt>
              <dd className="mt-1 text-gray-800">{siteConfig.cbrNumber}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">KvK-nummer</dt>
              <dd className="mt-1 text-gray-800">{siteConfig.kvkNumber}</dd>
            </div>
          </dl>
        </div>

        <Card variant="default">
          <Card.Header>
            <Card.Title className="text-xl text-westeraam-blue">
              Contact / Inschrijfformulier
            </Card.Title>
          </Card.Header>
          <Card.Content>
            {submitted ? (
              <Alert status="success">
                <Alert.Indicator />
                <Alert.Content>
                  <Alert.Title>Bedankt voor je aanmelding!</Alert.Title>
                  <Alert.Description>
                    We nemen zo snel mogelijk contact met je op.
                  </Alert.Description>
                </Alert.Content>
              </Alert>
            ) : (
              <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextField fullWidth isRequired name="naam">
                  <Label>Naam</Label>
                  <Input placeholder="Je volledige naam" />
                </TextField>

                <TextField fullWidth isRequired name="email" type="email">
                  <Label>E-mail</Label>
                  <Input placeholder="jouw@email.nl" />
                </TextField>

                <TextField fullWidth isRequired name="telefoon" type="tel">
                  <Label>Telefoonnummer</Label>
                  <Input placeholder="06-12345678" />
                </TextField>

                <Select
                  fullWidth
                  isRequired
                  name="opleiding"
                  placeholder="Selecteer een opleiding"
                  selectedKey={opleiding || null}
                  onSelectionChange={(key) => setOpleiding(String(key))}
                >
                  <Label>Rijbewijs halen voor</Label>
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {siteConfig.courses.map((course) => (
                        <ListBox.Item key={course} id={course} textValue={course}>
                          {course}
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>

                <TextField fullWidth name="bericht" defaultValue={defaultBericht}>
                  <Label>Opmerking</Label>
                  <TextArea
                    placeholder="Vertel ons iets over jezelf of stel een vraag..."
                    rows={4}
                  />
                </TextField>

                <Button type="submit" variant="primary" className="mt-2 w-full sm:w-auto">
                  Verstuur aanmelding
                </Button>
              </Form>
            )}
          </Card.Content>
        </Card>
      </div>

      <section className="mt-16">
        <h2 className="text-xl font-semibold text-westeraam-blue">Locatie</h2>
        <p className="mt-2 text-gray-600">{siteConfig.address}</p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <iframe
            title={`Kaart: ${siteConfig.shortName}`}
            src={siteConfig.mapsEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="mt-3">
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-westeraam-orange hover:underline"
          >
            Open routebeschrijving in Google Maps →
          </a>
        </p>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Suspense fallback={<p className="text-gray-500">Formulier laden…</p>}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
