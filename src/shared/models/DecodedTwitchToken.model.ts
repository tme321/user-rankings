export type DecodedTwitchToken = {
    channel_id: string;
    exp: number;
    is_unlinked: boolean;
    opaque_user_id: string;
    pubsub_perms: {
        listen: Array<string>;
        send: Array<string>;
    }
    role: string;
    user_id: string;
}
