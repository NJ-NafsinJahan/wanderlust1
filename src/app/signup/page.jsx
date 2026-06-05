"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { toast } from "react-toastify";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { Card } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    // console.log(user, "new user data");
    // ***************
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });
    // console.log(data, error);
    if (data) {
      toast.success("Account created successfully");
      redirect("/");
    }
    if (error) {
      toast.error(error.message || "Signup failed");
    }
  };

  //   for google signUp
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className=" max-w-lg mx-auto">
      <div className="text-center mb-6 mt-7">
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p>Start Your adventure with Wanderlust</p>
      </div>
      <Card className="max-w-xl mx-auto border">
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4 mx-auto">
          {/* For name */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          {/* for image */}
          <TextField name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Enter Image URL" />
            <FieldError />
          </TextField>
          {/* for email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center">
            <Button type="submit" className={"rounded-none w-full"}>
              Create Account
            </Button>
          </div>
          {/* For google sing up */}
          <div>
            <div className="whitespace-nowrap text-center">Or SignUp with</div>

            <Button
              onClick={handleGoogleSignIn}
              variant="outline"
              className={"rounded-none w-full"}
            >
              <FcGoogle /> SignUp with Google
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default SignUpPage;
