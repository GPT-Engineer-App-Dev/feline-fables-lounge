import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cat, Heart } from "lucide-react";

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats have a third eyelid called the nictitating membrane to protect their eyes.",
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentFact, setCurrentFact] = useState(catFacts[0]);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setCurrentFact(catFacts[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
          <Cat className="inline-block mr-2" /> The Wonderful World of Cats
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Cat Breeds</CardTitle>
              <CardDescription>Some popular cat breeds</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Siamese</li>
                <li>Maine Coon</li>
                <li>Persian</li>
                <li>Bengal</li>
                <li>Scottish Fold</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cat Behavior</CardTitle>
              <CardDescription>Understanding your feline friend</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Cats are known for their independent nature and unique behaviors. They communicate through body language, vocalizations, and scent marking. Cats are natural hunters and enjoy play that mimics hunting behaviors.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Did You Know?</CardTitle>
            <CardDescription>Interesting cat facts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{currentFact}</p>
            <Button onClick={getRandomFact}>Get Another Fact</Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <img
            src="https://placekitten.com/800/400"
            alt="Adorable kitten"
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-4"
          />
          <Button
            variant="outline"
            size="lg"
            onClick={() => setLikes(likes + 1)}
            className="group"
          >
            <Heart className="mr-2 h-6 w-6 group-hover:text-red-500 transition-colors" />
            Like this page ({likes})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
