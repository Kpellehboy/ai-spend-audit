# Testing Notes

## Audit Engine Tests

The audit engine is the most heavily validated section of the application because it contains the core business logic.

Primary coverage includes:
- overlapping tool detection
- inactive seat estimation
- plan mismatch heuristics
- API vs subscription recommendations

## Manual UI Testing

### Spend Form
- add/remove entries
- localStorage persistence
- mobile responsiveness
- validation errors

### Audit Results
- savings hierarchy
- recommendation rendering
- low savings state
- Credex CTA threshold

### Shareable Reports
- public URL rendering
- invalid share IDs
- Open Graph previews

## API Testing

### Summary API
- successful Anthropic response
- graceful fallback behavior
- invalid payload handling

### Email Delivery
- successful transactional send
- malformed email validation

## Browser Testing

Verified on:
- Chrome
- Safari
- Edge

## Mobile Testing

Tested at:
- iPhone width
- iPad width
- standard desktop resolutions