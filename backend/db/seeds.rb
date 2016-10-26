# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

# def random_status
#   ['new', 'in progress', 'closed', 'bad'].sample
# end

def random_tf
	[TRUE, FALSE].sample
end

def random_sector
	['Basic Materials','Consumer Goods','Financial','Health','Industrial Goods','Services','Technology'].sample
end

User.create(
	name: "Demo AppUser", 
	email: "login@emberrails.com",
	password_digest: User.digest('7Zc4}UI0'),
	investor_funded: random_tf,
  company: Faker::Company.name,
  sector: random_sector,
  customers: Faker::Number.between(50, 1000),
  revenue: Faker::Number.between(100000, 10000000),
  company_description: Faker::Lorem.paragraph(2, false, 2)
	)

300.times do
  User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    investor_funded: random_tf,
    company: Faker::Company.name,
    sector: random_sector,
    customers: Faker::Number.between(50, 1000),
    revenue: Faker::Number.between(100000, 10000000),
    company_description: Faker::Lorem.paragraph(2, false, 2),
    password_digest: User.digest('7Zc4}UI0'),
    created_at: Faker::Time.backward(14, :all),
    updated_at: Faker::Time.backward(14, :all)
  )
end
