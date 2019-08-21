import React from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import {
  Card,
  FormGroup,
  InputGroup,
  Switch,
  Button,
  Intent
} from "@blueprintjs/core";
import { RegisterDTO } from "../models/auth.model";

interface Props {
  headerText: string;
  showSeller: boolean;
  onSubmit(e: RegisterDTO): void;
}

export const AuthComponent: React.FC<Props> = ({
  headerText,
  showSeller,
  onSubmit
}) => (
    <Card>
    <Formik
      initialValues={{ username: "", password: "", seller: false }}
      onSubmit={e => onSubmit(e)}
      render={() => (
        <Form>
          <h2>{headerText}</h2>
          <Field
            name="username"
            render={({ field }: FieldProps) => (
              <FormGroup>
                <InputGroup
                  {...field}
                  id="username"
                  placeholder="Enter username"
                />
              </FormGroup>
            )}
          />
          <Field
            name="password"
            render={({ field }: FieldProps) => (
              <FormGroup>
                <InputGroup
                  {...field}
                  id="password"
                  type="password"
                  placeholder="Enter password"
                />
              </FormGroup>
            )}
          />
          {showSeller && (
            <Field
              name="seller"
              render={({ field }: FieldProps) => (
                <Switch {...field} label="Seller?" />
              )}
            />
          )}
          <Button type="submit" text="Submit" intent={Intent.PRIMARY} />
        </Form>
      )}
    />
  </Card>
);
