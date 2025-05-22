
import React from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const privacyFormSchema = z.object({
  profileVisibility: z.boolean().default(true),
  showSkills: z.boolean().default(true),
  allowMessages: z.boolean().default(true),
});

const securityFormSchema = z.object({
  twoFactorAuth: z.boolean().default(false),
  sessionTimeout: z.string().default("30"),
});

type PrivacyFormValues = z.infer<typeof privacyFormSchema>;
type SecurityFormValues = z.infer<typeof securityFormSchema>;

const DashboardSettings = () => {
  const { toast } = useToast();

  const privacyForm = useForm<PrivacyFormValues>({
    resolver: zodResolver(privacyFormSchema),
    defaultValues: {
      profileVisibility: true,
      showSkills: true,
      allowMessages: true,
    },
  });

  const securityForm = useForm<SecurityFormValues>({
    resolver: zodResolver(securityFormSchema),
    defaultValues: {
      twoFactorAuth: false,
      sessionTimeout: "30",
    },
  });

  const onPrivacySubmit = (data: PrivacyFormValues) => {
    toast({
      title: "Privacy settings updated",
      description: "Your privacy settings have been saved successfully.",
    });
  };

  const onSecuritySubmit = (data: SecurityFormValues) => {
    toast({
      title: "Security settings updated",
      description: "Your security settings have been saved successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      
      <div className="grid gap-6">
        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Privacy</CardTitle>
            <CardDescription>
              Manage how your information is displayed and shared
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...privacyForm}>
              <form onSubmit={privacyForm.handleSubmit(onPrivacySubmit)} className="space-y-4">
                <FormField
                  control={privacyForm.control}
                  name="profileVisibility"
                  render={({ field }) => (
                    <FormItem className="flex justify-between items-center">
                      <div>
                        <FormLabel>Profile Visibility</FormLabel>
                        <FormDescription>
                          Allow others to view your profile
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={privacyForm.control}
                  name="showSkills"
                  render={({ field }) => (
                    <FormItem className="flex justify-between items-center">
                      <div>
                        <FormLabel>Show Skills</FormLabel>
                        <FormDescription>
                          Make your skills visible to other users
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={privacyForm.control}
                  name="allowMessages"
                  render={({ field }) => (
                    <FormItem className="flex justify-between items-center">
                      <div>
                        <FormLabel>Direct Messages</FormLabel>
                        <FormDescription>
                          Allow other users to send you messages
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit">Save Privacy Settings</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>
              Manage your account security settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...securityForm}>
              <form onSubmit={securityForm.handleSubmit(onSecuritySubmit)} className="space-y-4">
                <FormField
                  control={securityForm.control}
                  name="twoFactorAuth"
                  render={({ field }) => (
                    <FormItem className="flex justify-between items-center">
                      <div>
                        <FormLabel>Two-Factor Authentication</FormLabel>
                        <FormDescription>
                          Add an extra layer of security to your account
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={securityForm.control}
                  name="sessionTimeout"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Session Timeout (minutes)</FormLabel>
                      <FormDescription>
                        Set how long before your session expires due to inactivity
                      </FormDescription>
                      <FormControl>
                        <Input {...field} type="number" min="5" max="240" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Save Security Settings</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardSettings;
