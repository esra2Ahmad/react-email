import { Resend } from "resend";
import { render } from "@react-email/components";
import WelcomeTemplate from "../../../../emails"

const resend = new Resend('process.env.RESEND_API_KEY');
export async function POST (request: Request, res: Response ) {
    const {email} =await request.json();
    const {data, error}= await resend.emails.send ({
        from: "Acme <onboarding@resend.dev>",
        to:[email],
        subject:"thank you",
        html: render(WelcomeTemplate({userFirstname}))
    });
    if (error ){
        return Response.json(error);
    }
    return Response.json ({meesage:"Email sent successfully"})
}