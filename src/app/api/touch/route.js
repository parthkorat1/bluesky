
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/mongo";
import Client from "../../../model/user-model";
// for mails
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);




connect()


export async function POST(request) {
    try {
        const reqBody = await request.json()
        const {name,email,phone,message } = reqBody

        console.log("checking", reqBody)

        
        const newClient = new Client({
           name,
           email,
           phone,
           message,
           
        })

        const saveClient = await newClient.save()

    

        console.log("client save veriable", saveClient);
        console.log("client crete save", newClient);

        //for mails
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['rksingh19900601@gmail.com'],
            subject: 'Some one visite our website ',
            react: EmailTemplate({ firstName: name , email:email,phone:phone,message:message }),
          });
          
          if (error) {
            console.error('Failed to send email:', error);
            return NextResponse.json({ message: 'Failed to send email', success: false }, { status: 500 });
          }

        return NextResponse.json({
            message: "client creted successfully",
            success: true,
            Client
        })

    } catch (error) {
        console.log("ree",error.message)
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}