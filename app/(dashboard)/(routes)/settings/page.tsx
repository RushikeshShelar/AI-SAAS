import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";
import { checkSubscription } from "@/lib/subscription";
import SubscriptionButton from "@/components/subscription-button";

const SettingsPage = async () => {
    
    const isPro = await checkSubscription();

    return ( 
        <div>
            <Heading 
                title="Settings"
                description="Manage your account settings."
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-sm text-muted-foreground">
                    {isPro ? "You are currently subscribed to the Pro plan." : "You are currently on a Free plan."}
                </div>
                <SubscriptionButton isPro={isPro}/>
            </div>
        </div>
     );
}
 
export default SettingsPage;