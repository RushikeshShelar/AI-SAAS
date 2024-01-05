import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandningPage = () => {
    return ( 
        <div>
            <h1>LandningPage (unprotected)</h1>
            <div>
                <Button>
                    <Link href='/sign-in'>
                        Login
                    </Link>
                </Button>
                <Button>
                <Link href='/sign-up'>
                        Register
                    </Link>
                </Button>
            </div>
        </div>
     );
}
 
export default LandningPage;