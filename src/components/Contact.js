import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(null);

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          ok: true,
          msg: "Message sent — thank you!"
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          ok: false,
          msg: "Failed — please try again later."
        });
      }
    } catch (err) {
      setStatus({
        ok: false,
        msg: "Error — check your connection."
      });
    }
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="mb-3">Contact</h2>

        {status && (
          <Alert variant={status.ok ? "success" : "danger"}>
            {status.msg}
          </Alert>
        )}

        <Form onSubmit={sendMessage} style={{ maxWidth: 720 }}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </Form.Group>

          <Button type="submit">Send Message</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
