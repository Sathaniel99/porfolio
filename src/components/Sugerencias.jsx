import React, { useState, useEffect } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { BsSendFill, BsEnvelopeAtFill, BsTextarea, BsFileText, BsTextLeft } from "react-icons/bs";
import { Hr } from "./hr";

export function Sugerencias() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState('');
  const [sugerencia, setSugerencia] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `Hola soy ${texto}\n , escribo por mi Sugerencia: ${sugerencia}`;
    window.open(`https://wa.me/+54528530?text=${mensaje}`, '_blank');
  };
  
  useEffect(() => {
    if (isChecked) {
      setEmail("Su forma de identificarlo...");
    } else {
      setEmail("Su Email...");
    }
  }, [isChecked]);

  return (
    <React.Fragment>
      <style>{`
        input[type="checkbox"] {
          cursor: pointer;
        }
      `}</style>
      <h3 className="mt-3 w-100 text-center user-select-none">Sugerencias</h3>
      <Hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="id_email" >
          <InputGroup>
            <InputGroup.Text id="email-addon">
              <BsEnvelopeAtFill style={{display: isChecked ? "none" : "block"}} />
              <BsTextLeft style={{display: isChecked ? "block" : "none"}} />
            </InputGroup.Text>
            <Form.Control
              name="email"
              type={isChecked ? "text" : "email"}
              placeholder={email}
              aria-label="Email"
              aria-describedby="email-addon"
              required
              onChange={(e) => setTexto(e.target.value)}
            />
            <InputGroup.Text>
              <Form.Check
                type="checkbox"
                id="checkbox-comments"
                className="mt-0"
                aria-label="Checkbox for comments"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
          </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="id_comments">
          <InputGroup>
            <InputGroup.Text className="rounded-top text-center w-100 text-muted user-select-none" >
              Sugerencia:
            </InputGroup.Text>
            <Form.Control
              as="textarea"
              name="comments"
              rows={4}
              className="rounded-bottom"
              placeholder="Sugiera..."
              style={{ height: "15rem", minHeight: "15rem" , marginLeft: '0'}}
              onChange={(e) => setSugerencia(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>
        <div className="d-flex flex-column gap-1 user-select-none">
          <Button variant="outline-success" className="m-auto" type="submit">
            <BsSendFill /> Enviar
          </Button>
          <em style={{fontSize: ".9rem"}}>Enviar a Whatsapp</em>
        </div>
      </Form>
    </React.Fragment>
  );
}

  

