import { query } from '@/graphql'

export class ReservationRequest {
  static async fetchByUserId (
    userId: number,
    from: Date = new Date(),
    fields: string[] = ['id', 'date', 'status']
  ) {
    const { reservationRequests } = await query(
      `query
      ReservationRequests($from: DateTime!, $userId: Int!) {
        reservationRequests(from: $from, userId: $userId) {
          ${fields.join('\n')}
        }
      }`,
      {
        from,
        userId
      }
    )

    return reservationRequests
  }
}