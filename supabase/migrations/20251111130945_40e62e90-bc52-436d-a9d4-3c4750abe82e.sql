-- Allow public access to view course outlines
create policy "Public can view course outlines"
on course_outlines
for select
using (true);