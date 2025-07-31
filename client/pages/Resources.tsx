import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, MessageCircle } from "lucide-react";

export default function Resources() {
  return (
    <Layout>
      <div className="py-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <BookOpen className="h-16 w-16 text-cyber-blue mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Resources Coming Soon
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're working hard to bring you comprehensive resources for financial literacy 
              and cybersecurity. This section will include guides, tools, calculators, and more.
            </p>
            
            <Card className="border-accent/20 mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What's Coming
                </h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Interactive financial calculators</li>
                  <li>• Downloadable security checklists</li>
                  <li>• Video tutorials and webinars</li>
                  <li>• Industry reports and research</li>
                  <li>• Community forums and discussions</li>
                  <li>• Expert-curated reading lists</li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-cyber-blue hover:bg-cyber-blue/90">
                <MessageCircle className="h-4 w-4 mr-2" />
                Get Notified When Ready
              </Button>
              <Button variant="outline">
                Request Specific Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
