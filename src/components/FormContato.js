import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function FormContato() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Nome Completo:</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Assunto:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control type="file" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button type='submit' variant="primary" size="lg">
          Enviar
        </Button>
      </div>
    </Form>
  );
}

export default FormContato;