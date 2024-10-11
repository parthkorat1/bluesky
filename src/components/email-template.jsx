import * as React from 'react';

// interface EmailTemplateProps {
//   firstName: string;
// }

export const EmailTemplate = ({
  firstName,
  email,
  phone,
  message
}) => (
  <div>
    <h1>name:- {firstName}</h1>
    <h1>Email:- {email}</h1>
    <h1>NUmber:- {phone}</h1>
    <h1>MEssage:- {message}</h1>

    <h2>Regards,</h2>
    <h2>BlueSky Team. </h2>
  </div>
);
