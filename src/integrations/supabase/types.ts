export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
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
          created_at: string | null
          email: string
          id: string
          is_active: boolean | null
          last_login: string | null
          role: Database["public"]["Enums"]["portal_user_role"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          is_active?: boolean | null
          last_login?: string | null
          role?: Database["public"]["Enums"]["portal_user_role"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_confirmation_token: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_slug: {
        Args: { title: string }
        Returns: string
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
