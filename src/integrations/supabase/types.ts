export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      auth_audit_logs: {
        Row: {
          created_at: string
          error_message: string | null
          event_type: string
          id: string
          ip_address: string | null
          success: boolean
          user_agent: string | null
          user_email: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          event_type: string
          id?: string
          ip_address?: string | null
          success?: boolean
          user_agent?: string | null
          user_email: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          event_type?: string
          id?: string
          ip_address?: string | null
          success?: boolean
          user_agent?: string | null
          user_email?: string
        }
        Relationships: []
      }
      bias_scores: {
        Row: {
          created_at: string
          gender: number
          id: string
          overall_score: number
          political: number
          race: number
          test_id: string
          toxicity: number
        }
        Insert: {
          created_at?: string
          gender?: number
          id?: string
          overall_score?: number
          political?: number
          race?: number
          test_id: string
          toxicity?: number
        }
        Update: {
          created_at?: string
          gender?: number
          id?: string
          overall_score?: number
          political?: number
          race?: number
          test_id?: string
          toxicity?: number
        }
        Relationships: [
          {
            foreignKeyName: "bias_scores_test_id_fkey"
            columns: ["test_id"]
            isOneToOne: false
            referencedRelation: "tests"
            referencedColumns: ["id"]
          },
        ]
      }
      civic_gift_logs: {
        Row: {
          agent_id: string | null
          api_response: Json | null
          api_status: string
          crawl_max_depth: number | null
          crawl_max_pages: number | null
          created_at: string | null
          email: string
          enhanced_crawl: boolean | null
          entity_type: string
          id: string
          ip_address: string | null
          phone_area_code: string
          phone_number_returned: string | null
          primary_name: string
          provision_kb: boolean | null
          region: string | null
          secondary_name: string
          specialization: string | null
          user_agent: string | null
          website: string | null
        }
        Insert: {
          agent_id?: string | null
          api_response?: Json | null
          api_status: string
          crawl_max_depth?: number | null
          crawl_max_pages?: number | null
          created_at?: string | null
          email: string
          enhanced_crawl?: boolean | null
          entity_type: string
          id?: string
          ip_address?: string | null
          phone_area_code: string
          phone_number_returned?: string | null
          primary_name: string
          provision_kb?: boolean | null
          region?: string | null
          secondary_name: string
          specialization?: string | null
          user_agent?: string | null
          website?: string | null
        }
        Update: {
          agent_id?: string | null
          api_response?: Json | null
          api_status?: string
          crawl_max_depth?: number | null
          crawl_max_pages?: number | null
          created_at?: string | null
          email?: string
          enhanced_crawl?: boolean | null
          entity_type?: string
          id?: string
          ip_address?: string | null
          phone_area_code?: string
          phone_number_returned?: string | null
          primary_name?: string
          provision_kb?: boolean | null
          region?: string | null
          secondary_name?: string
          specialization?: string | null
          user_agent?: string | null
          website?: string | null
        }
        Relationships: []
      }
      civic_gift_otp: {
        Row: {
          created_at: string | null
          email: string
          expires_at: string
          id: string
          otp_code: string
          verified: boolean | null
        }
        Insert: {
          created_at?: string | null
          email: string
          expires_at: string
          id?: string
          otp_code: string
          verified?: boolean | null
        }
        Update: {
          created_at?: string | null
          email?: string
          expires_at?: string
          id?: string
          otp_code?: string
          verified?: boolean | null
        }
        Relationships: []
      }
      client_group_memberships: {
        Row: {
          created_at: string | null
          group_id: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          group_id?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          group_id?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_group_memberships_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "client_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_group_memberships_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "portal_users"
            referencedColumns: ["id"]
          },
        ]
      }
      client_groups: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_groups_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "portal_users"
            referencedColumns: ["id"]
          },
        ]
      }
      course_outlines: {
        Row: {
          course_name: string
          course_slug: string
          id: string
          metadata: Json | null
          pdf_filename: string | null
          pdf_url: string | null
          updated_at: string | null
          uploaded_at: string | null
          uploaded_by: string | null
        }
        Insert: {
          course_name: string
          course_slug: string
          id?: string
          metadata?: Json | null
          pdf_filename?: string | null
          pdf_url?: string | null
          updated_at?: string | null
          uploaded_at?: string | null
          uploaded_by?: string | null
        }
        Update: {
          course_name?: string
          course_slug?: string
          id?: string
          metadata?: Json | null
          pdf_filename?: string | null
          pdf_url?: string | null
          updated_at?: string | null
          uploaded_at?: string | null
          uploaded_by?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          created_at: string
          extracted_text: string | null
          file_size: number
          filename: string
          id: string
          mime_type: string
          original_name: string
          storage_path: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          extracted_text?: string | null
          file_size: number
          filename: string
          id?: string
          mime_type: string
          original_name: string
          storage_path: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          extracted_text?: string | null
          file_size?: number
          filename?: string
          id?: string
          mime_type?: string
          original_name?: string
          storage_path?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      email_campaigns: {
        Row: {
          click_count: number
          created_at: string
          id: string
          open_count: number
          post_id: string | null
          recipient_count: number
          scheduled_send_at: string | null
          sent_at: string
          status: string
          subject: string
        }
        Insert: {
          click_count?: number
          created_at?: string
          id?: string
          open_count?: number
          post_id?: string | null
          recipient_count?: number
          scheduled_send_at?: string | null
          sent_at?: string
          status?: string
          subject: string
        }
        Update: {
          click_count?: number
          created_at?: string
          id?: string
          open_count?: number
          post_id?: string | null
          recipient_count?: number
          scheduled_send_at?: string | null
          sent_at?: string
          status?: string
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_campaigns_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      email_rate_limits: {
        Row: {
          created_at: string
          email: string
          email_type: string
          id: string
          send_count: number
          window_start: string
        }
        Insert: {
          created_at?: string
          email: string
          email_type: string
          id?: string
          send_count?: number
          window_start?: string
        }
        Update: {
          created_at?: string
          email?: string
          email_type?: string
          id?: string
          send_count?: number
          window_start?: string
        }
        Relationships: []
      }
      email_templates: {
        Row: {
          created_at: string
          html_template: string
          id: string
          is_active: boolean | null
          name: string
          subject_template: string
          updated_at: string
          variables: Json | null
        }
        Insert: {
          created_at?: string
          html_template: string
          id?: string
          is_active?: boolean | null
          name: string
          subject_template: string
          updated_at?: string
          variables?: Json | null
        }
        Update: {
          created_at?: string
          html_template?: string
          id?: string
          is_active?: boolean | null
          name?: string
          subject_template?: string
          updated_at?: string
          variables?: Json | null
        }
        Relationships: []
      }
      magic_link_tokens: {
        Row: {
          created_at: string | null
          email: string
          expires_at: string
          id: string
          token: string
          used_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          expires_at: string
          id?: string
          token: string
          used_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          expires_at?: string
          id?: string
          token?: string
          used_at?: string | null
        }
        Relationships: []
      }
      model_results: {
        Row: {
          cost_usd: number
          created_at: string
          id: string
          latency_ms: number
          model_name: string
          response: string
          test_id: string
          tokens: number
        }
        Insert: {
          cost_usd?: number
          created_at?: string
          id?: string
          latency_ms?: number
          model_name: string
          response: string
          test_id: string
          tokens?: number
        }
        Update: {
          cost_usd?: number
          created_at?: string
          id?: string
          latency_ms?: number
          model_name?: string
          response?: string
          test_id?: string
          tokens?: number
        }
        Relationships: [
          {
            foreignKeyName: "model_results_test_id_fkey"
            columns: ["test_id"]
            isOneToOne: false
            referencedRelation: "tests"
            referencedColumns: ["id"]
          },
        ]
      }
      portal_config: {
        Row: {
          created_at: string | null
          created_by: string | null
          encrypted_value: string
          id: string
          key_name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          encrypted_value: string
          id?: string
          key_name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          encrypted_value?: string
          id?: string
          key_name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "portal_config_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "portal_users"
            referencedColumns: ["id"]
          },
        ]
      }
      portal_users: {
        Row: {
          confirmation_token: string | null
          created_at: string | null
          email: string
          email_confirmed: boolean | null
          email_confirmed_at: string | null
          id: string
          is_active: boolean | null
          last_login: string | null
          role: Database["public"]["Enums"]["portal_user_role"]
          updated_at: string | null
        }
        Insert: {
          confirmation_token?: string | null
          created_at?: string | null
          email: string
          email_confirmed?: boolean | null
          email_confirmed_at?: string | null
          id?: string
          is_active?: boolean | null
          last_login?: string | null
          role?: Database["public"]["Enums"]["portal_user_role"]
          updated_at?: string | null
        }
        Update: {
          confirmation_token?: string | null
          created_at?: string | null
          email?: string
          email_confirmed?: boolean | null
          email_confirmed_at?: string | null
          id?: string
          is_active?: boolean | null
          last_login?: string | null
          role?: Database["public"]["Enums"]["portal_user_role"]
          updated_at?: string | null
        }
        Relationships: []
      }
      posts: {
        Row: {
          author_id: string
          content: string
          created_at: string
          distribution_status: string | null
          excerpt: string | null
          featured_image: string | null
          id: string
          published_at: string | null
          scheduled_at: string | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          status: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          distribution_status?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published_at?: string | null
          scheduled_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          status?: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          distribution_status?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published_at?: string | null
          scheduled_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          status?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Relationships: []
      }
      purchases: {
        Row: {
          amount_paid: number
          course_name: string
          course_slug: string
          currency: string
          first_name: string | null
          id: string
          language: string | null
          last_name: string | null
          order_number: string | null
          purchased_at: string | null
          quantity: number
          status: string
          stripe_checkout_session_id: string | null
          stripe_payment_intent_id: string | null
          user_email: string
          user_id: string | null
        }
        Insert: {
          amount_paid: number
          course_name: string
          course_slug: string
          currency?: string
          first_name?: string | null
          id?: string
          language?: string | null
          last_name?: string | null
          order_number?: string | null
          purchased_at?: string | null
          quantity?: number
          status?: string
          stripe_checkout_session_id?: string | null
          stripe_payment_intent_id?: string | null
          user_email: string
          user_id?: string | null
        }
        Update: {
          amount_paid?: number
          course_name?: string
          course_slug?: string
          currency?: string
          first_name?: string | null
          id?: string
          language?: string | null
          last_name?: string | null
          order_number?: string | null
          purchased_at?: string | null
          quantity?: number
          status?: string
          stripe_checkout_session_id?: string | null
          stripe_payment_intent_id?: string | null
          user_email?: string
          user_id?: string | null
        }
        Relationships: []
      }
      retell_agent_assignments: {
        Row: {
          agent_name: string | null
          created_at: string | null
          group_id: string | null
          id: string
          retell_agent_id: string
        }
        Insert: {
          agent_name?: string | null
          created_at?: string | null
          group_id?: string | null
          id?: string
          retell_agent_id: string
        }
        Update: {
          agent_name?: string | null
          created_at?: string | null
          group_id?: string | null
          id?: string
          retell_agent_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "retail_agent_assignments_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "client_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      subscribers: {
        Row: {
          confirmation_token: string | null
          confirmed_at: string | null
          double_opt_in: boolean | null
          email: string
          id: string
          last_email_sent_at: string | null
          preferences: Json | null
          status: string
          subscribed_at: string
          subscription_source: string | null
          unsubscribe_reason: string | null
          unsubscribe_token: string | null
          unsubscribed_at: string | null
          utm_source: string | null
        }
        Insert: {
          confirmation_token?: string | null
          confirmed_at?: string | null
          double_opt_in?: boolean | null
          email: string
          id?: string
          last_email_sent_at?: string | null
          preferences?: Json | null
          status?: string
          subscribed_at?: string
          subscription_source?: string | null
          unsubscribe_reason?: string | null
          unsubscribe_token?: string | null
          unsubscribed_at?: string | null
          utm_source?: string | null
        }
        Update: {
          confirmation_token?: string | null
          confirmed_at?: string | null
          double_opt_in?: boolean | null
          email?: string
          id?: string
          last_email_sent_at?: string | null
          preferences?: Json | null
          status?: string
          subscribed_at?: string
          subscription_source?: string | null
          unsubscribe_reason?: string | null
          unsubscribe_token?: string | null
          unsubscribed_at?: string | null
          utm_source?: string | null
        }
        Relationships: []
      }
      tags: {
        Row: {
          created_at: string
          id: string
          name: string
          usage_count: number
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          usage_count?: number
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          usage_count?: number
        }
        Relationships: []
      }
      tests: {
        Row: {
          created_at: string
          id: string
          prompt: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          prompt: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          prompt?: string
          user_id?: string
        }
        Relationships: []
      }
      thresholds: {
        Row: {
          bias_max: number
          created_at: string
          toxicity_max: number
          updated_at: string
          user_id: string
        }
        Insert: {
          bias_max?: number
          created_at?: string
          toxicity_max?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          bias_max?: number
          created_at?: string
          toxicity_max?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      unsubscribe_requests: {
        Row: {
          created_at: string
          feedback: string | null
          id: string
          ip_address: string | null
          processed_at: string | null
          reason: string | null
          subscriber_id: string | null
          token: string
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          feedback?: string | null
          id?: string
          ip_address?: string | null
          processed_at?: string | null
          reason?: string | null
          subscriber_id?: string | null
          token: string
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          feedback?: string | null
          id?: string
          ip_address?: string | null
          processed_at?: string | null
          reason?: string | null
          subscriber_id?: string | null
          token?: string
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "unsubscribe_requests_subscriber_id_fkey"
            columns: ["subscriber_id"]
            isOneToOne: false
            referencedRelation: "subscribers"
            referencedColumns: ["id"]
          },
        ]
      }
      user_licenses: {
        Row: {
          course_name: string
          course_slug: string
          expires_at: string | null
          granted_at: string | null
          id: string
          purchase_id: string | null
          quantity: number
          user_email: string
          user_id: string | null
        }
        Insert: {
          course_name: string
          course_slug: string
          expires_at?: string | null
          granted_at?: string | null
          id?: string
          purchase_id?: string | null
          quantity?: number
          user_email: string
          user_id?: string | null
        }
        Update: {
          course_name?: string
          course_slug?: string
          expires_at?: string | null
          granted_at?: string | null
          id?: string
          purchase_id?: string | null
          quantity?: number
          user_email?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_licenses_purchase_id_fkey"
            columns: ["purchase_id"]
            isOneToOne: false
            referencedRelation: "purchases"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_confirmation_token: { Args: never; Returns: string }
      generate_order_number: { Args: never; Returns: string }
      generate_slug: { Args: { title: string }; Returns: string }
      is_admin: { Args: never; Returns: boolean }
      is_portal_admin: { Args: never; Returns: boolean }
      set_config: {
        Args: { parameter: string; value: string }
        Returns: undefined
      }
    }
    Enums: {
      portal_user_role: "admin" | "client"
      user_role: "user" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      portal_user_role: ["admin", "client"],
      user_role: ["user", "admin"],
    },
  },
} as const
