import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FiMail, FiLock } from "react-icons/fi";

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log("Logging in with:", email, password);
      onLogin();
    } else {
      console.log("Please fill out all fields!");
    }
  };

  return (
    <div className="text-center">
      <h1 className="mb-3">LOGIN</h1>
      <p className="mb-4">Indtast login oplysninger:</p>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FiMail />
          </InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Indtast din email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FiLock />
          </InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Indtast adgangskode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit" variant="primary" className="w-100">
          LOGIN
        </Button>
      </Form>
    </div>
  );
};
