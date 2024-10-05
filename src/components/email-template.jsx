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
    <h1>Welcome, {firstName}</h1>
    <h1>Welcome, {email}</h1>
    <h1>Welcome, {phone}</h1>
    <h1>Welcome, {message}</h1>

    <h3> is need to change templet of this email . if yes then inform and no then definetly inform.</h3>

    <h2>Regards,</h2>
    <h2>BlueSky Team. </h2>
  </div>
);
