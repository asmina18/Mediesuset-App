import { Button } from "react-bootstrap";

export const Logout = ({ onLogout }) => {
  return (
    <div className="text-center">
      <h1 className="mb-3">Velkommen!</h1>
      <p className="mb-4">Du er logget ind.</p>
      <Button variant="danger" className="w-10" onClick={onLogout}>
        LOG UD
      </Button>
    </div>
  );
};
