using Microsoft.EntityFrameworkCore;
using UserCrudApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("UsersDb")); // For demo; use SQL Server for production

// ===== ADD THIS FOR CORS =====
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});
// =============================

var app = builder.Build();


app.UseCors("AllowAngularDev");
// ==========================================

app.MapControllers();
app.Run();