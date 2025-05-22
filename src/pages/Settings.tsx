
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";

const notificationsFormSchema = z.object({
  emailNotifications: z.boolean().default(true),
  newMatches: z.boolean().default(true),
  newMessages: z.boolean().default(true),
  marketingEmails: z.boolean().default(false),
});

const accountFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    }),
});

const deleteAccountSchema = z.object({
  confirmDelete: z.literal("DELETE", {
    errorMap: () => ({ message: "You must type DELETE to confirm." }),
  }),
});

type NotificationsFormValues = z.infer<typeof notificationsFormSchema>;
type AccountFormValues = z.infer<typeof accountFormSchema>;
type DeleteAccountValues = z.infer<typeof deleteAccountSchema>;

const Settings = () => {
  const { toast } = useToast();

  const notificationsForm = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues: {
      emailNotifications: true,
      newMatches: true,
      newMessages: true,
      marketingEmails: false,
    },
  });

  const accountForm = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      username: "skilluser",
      email: "user@example.com",
    },
  });

  const deleteAccountForm = useForm<DeleteAccountValues>({
    resolver: zodResolver(deleteAccountSchema),
    defaultValues: {
      confirmDelete: "" as any,
    },
  });

  const onNotificationsSubmit = (data: NotificationsFormValues) => {
    toast({
      title: "Notification preferences updated",
      description: "Your notification settings have been saved successfully.",
    });
  };

  const onAccountSubmit = (data: AccountFormValues) => {
    toast({
      title: "Account details updated",
      description: "Your account information has been updated successfully.",
    });
  };

  const onDeleteSubmit = (data: DeleteAccountValues) => {
    toast({
      title: "Account deletion requested",
      description: "We're sorry to see you go. Your account will be deleted soon.",
      variant: "destructive",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>
        
        <div className="grid gap-8">
          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Choose what notifications you receive
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...notificationsForm}>
                <form onSubmit={notificationsForm.handleSubmit(onNotificationsSubmit)} className="space-y-4">
                  <FormField
                    control={notificationsForm.control}
                    name="emailNotifications"
                    render={({ field }) => (
                      <FormItem className="flex justify-between">
                        <div className="space-y-0.5">
                          <FormLabel>Email Notifications</FormLabel>
                          <FormDescription>
                            Receive notifications via email
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
                    control={notificationsForm.control}
                    name="newMatches"
                    render={({ field }) => (
                      <FormItem className="flex justify-between">
                        <div className="space-y-0.5">
                          <FormLabel>New Matches</FormLabel>
                          <FormDescription>
                            Get notified when you have a new skill match
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
                    control={notificationsForm.control}
                    name="newMessages"
                    render={({ field }) => (
                      <FormItem className="flex justify-between">
                        <div className="space-y-0.5">
                          <FormLabel>New Messages</FormLabel>
                          <FormDescription>
                            Get notified when you receive new messages
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
                    control={notificationsForm.control}
                    name="marketingEmails"
                    render={({ field }) => (
                      <FormItem className="flex justify-between">
                        <div className="space-y-0.5">
                          <FormLabel>Marketing Emails</FormLabel>
                          <FormDescription>
                            Receive emails about new features and offers
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
                  <Button type="submit">Save Notification Settings</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Account Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Update your account details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...accountForm}>
                <form onSubmit={accountForm.handleSubmit(onAccountSubmit)} className="space-y-4">
                  <FormField
                    control={accountForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={accountForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Update Account</Button>
                </form>
              </Form>
              
              <div className="mt-8">
                <Link to="/dashboard/password">
                  <Button variant="outline">Change Password</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          {/* Danger Zone */}
          <Card className="border-red-200">
            <CardHeader className="text-red-500">
              <CardTitle>Danger Zone</CardTitle>
              <CardDescription className="text-red-400">
                Irreversible and destructive actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Separator className="my-4" />
              <h3 className="text-lg font-semibold mb-2">Delete Account</h3>
              <p className="text-sm text-gray-600 mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Form {...deleteAccountForm}>
                <form onSubmit={deleteAccountForm.handleSubmit(onDeleteSubmit)} className="space-y-4">
                  <FormField
                    control={deleteAccountForm.control}
                    name="confirmDelete"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type DELETE to confirm</FormLabel>
                        <FormControl>
                          <Input placeholder="DELETE" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button variant="destructive" type="submit">
                    Delete Account
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;
